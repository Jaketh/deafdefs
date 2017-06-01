var myDataRef = new Firebase('https://sizzling-torch-3146.firebaseIO.com/Libraries');

// myDataRef.set(null); if you want to clear out the libraries unccoment this.
myDataRef.push({
      name: "9th Grade Math",
      words: [
        {
          name: "water",
          def: "Damn, son where'd you get that?",
          category: "bio"
        }
      ]
});
