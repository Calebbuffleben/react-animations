class Cache{
    constructor(capacity){
        this.capacity = capacity;
        this.cache = {};
        this.head = null;
        this.tail = null;
    }

    put(key, value){
        //If the cache arleady have this key
        if(cache[key]){
            //Update the value of hte key and move it to front
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
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head
            this.head = newNode;
        }

        this.cache[key] = value
    }

    moveToFront(key) {
        const current = this.cache[key];

        if (current === this.head) return;

        let prev = null;
        let node = this.head;

        while(node && node.key !== key){
            prev = node;
            node = node.next;
        }

        if(!node) return;

        if(node === this.tail){
            this.tail = prev
        }

        if(prev){
            prev.next = node.next
        }

        node.next = this.head;
        this.head = node;
    }
}