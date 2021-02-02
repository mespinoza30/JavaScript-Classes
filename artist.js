class Artist {
    constructor(name, age, genre, label) {
        //you will need to decide what the datatype has to be
        //datatypes: string, integer, arrays, objects, booleans
        this.name = name;
        this.age = age;
        //the instance needs to be an array
        this.genre = genre;
        this.label = label;
        this.albums = [];
        this.songs = [];
        this.image = '';
        this.instagram = null;
    }
    //methods go in here
    addAlbum(album) {
        this.albums.push(album);
        console.log(`This is an album ${album} for ${this.name}`)
    }
    addSong(song) {
        this.songs.push(song);
        console.log(`This is a song ${song} for ${this.name}`)
    }
    addImage(imageLink) {
        this.image = imageLink;
    }
    addIG(username) {
        this.instagram = username;
    }

}

// //this is an instance of the Artist class
// const drake = new Artist('Drake', '33', 'hip hop', 'cash money records');
// const hozier = new Artist('Hozier', '99', 'rock', 'cash money records');
// const carlCox = new Artist('Carl Cox', '50', 'house', 'cash money records');

//look up an artist, get all attributes, find 2 albums, add those 2 albums, find 2 songs & add them
//find an image and copy the image URL, add image
//find their ig username and add user name
// const dannyOcean = new Person('Danny Ocean', true);
const dannyOcean = new Artist('Danny Ocean', '28', 'Latin pop', 'Atlantic Records');
dannyOcean.addAlbum('54 + 1')
dannyOcean.addSong('Cuando Me Acerco A Ti')
dannyOcean.addSong('Me Rehuso')
dannyOcean.addImage('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Danny_Ocean_%C2%BFEs_parte_de_un_Nuevo_Orden_%28CROPPED%29.jpg/1200px-Danny_Ocean_%C2%BFEs_parte_de_un_Nuevo_Orden_%28CROPPED%29.jpg')
dannyOcean.addIG('dannocean')