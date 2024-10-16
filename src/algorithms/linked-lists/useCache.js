const { useRef } = require("react");

class Cache{
    constructor(capacity){
        this.capacity = capacity;
        this.cache = {};
        this.head = null;
        this.tail = null;
    }

    get(key){
        if(this.cache[key]){
            this.moveToFront(key);
            return this.cache[key].value;
        }

        return null;
    }

    put(key, value){
        //If the cache arleady have this key
        if(this.cache[key]){
            //Update the value of the key and move it to front
            this.cache[key].value = value;

            this.moveToFront();
        } 
        /* If the item doesn't exists in this cache */ 
        else {
            /*Then ,verify if the lenght of the array is full, and
             we remove the last item and add the item to the front */
            if(Object.keys(this.cache).length === this.capacity){
                this.removeLast();
            }
            this.addToFront(key, value);
        }
    }

    addToFront(key, value) {
        const newNode = {
            key,
            value,
            next: null
        }

        //If the first element is empty insert in the head
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } 
        // Otherwise will assign the value of the head for the next
        else {
            newNode.next = this.head
            this.head = newNode;
        }

        this.cache[key] = newNode
    }

    moveToFront(key) {
        const current = this.cache[key];
        
        //If the values is equal to head, will return
        if (current === this.head) return;

        let prev = null;
        let node = this.head;

        while(node && node.key !== key){
            //Move the current from the next position
            prev = node;
            node = node.next;
        }

        if(!node) return;

        
        if(node === this.tail){
            this.tail = prev
        }

        // Assign the value of the next to the previous "next"
        if(prev){
            prev.next = node.next
        }

        //Assign the value of the head for the "next" pointer of the values and assign all the node from the head 
        node.next = this.head;
        this.head = node;
    }

    removeLast(){
        if(!this.head) return;

        const lastKey = this.tail.key;
        delete this.cache[lastKey];

        if(this.head === this.tail){
            this.head = null;
            this.tail = null;            
        } else {
            let current = this.head;

            //Finding the element before the last
            while(current.next !== this.tail){
                current = current.next;
            }

            // Assign for the tail the new last value
            current.next = null;
            this.tail = current;
        }
    }
}

const useCache = (capacity) => {
    const cacheRef = useRef(new Cache(capacity));

    return{
        get: (key) => cacheRef.current.get(key),
        put: (key, value) => cacheRef.current.put(key, value)
    }
}

export default useCache;