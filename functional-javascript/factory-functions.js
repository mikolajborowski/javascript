class List {
    items = [];

    addItem(item) {
        this.item.push(item);
    }

    getItems() {
        return this.items;
    }
}

const todo = new List();
// This keyword is not always realable

// Factory:
const factory = () => ({
    type: 'factory function'
})

factory();

// Better way than objects
const list = () => {
    const items = [];
    return Object.freeze({
        addItem: () => items.push(item),
        getItems: () => items,
    });
}

const todo = list()

// we gained private privlage on items function items or todo.items will not work here