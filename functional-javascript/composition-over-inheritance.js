//Inheritance 
class Media {
    record() {}
    share() {}
}

class Movie extends Media {
    watch() {}
}

class Podcast extends Media {
    listen() {}
}

class Newsletter {
    share() {}
    read() {}
}
//problem: I have share method in last class but i can not extend that with
// Media, because i could record newsletter and that would be wrong 
// i could create new class that Newsletter could extend but this will be DRY mistake

//Object compositon
// Factory design pattern
const recordable = (state) => ({
    record: () => `I'm recording ${state.name}`
})
//and othere 
//Factory function:
const movie = (name) => {
    const state = { name: name, type: 'movie' };
    return Object.assign({}, recordable(state));
};

const latestMovie = movie('Pulpfiction')