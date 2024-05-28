// polymorphism

class User {
    constructor() {
      this.numberOfArticles = 0;
    }

    // setter methode
    set setNumberOfArticles(numberOfArticles){
        this.setNumberOfArticles = numberOfArticles;
    }

    // set getter
    get getNumberOfArticles(){
        return this.numberOfArticles;
    }

    calcScores(){}
  }

  class Author extends User{
    // overriding calcScores() method of parent class

    calcScores(){
        return this.numberOfArticles * 10 + 20;
    }
  }


  class Editor extends User{

    // override calcScores() method of parent class

    calcScores(){
        return this.numberOfArticles * 6 + 15;
    }
  }


  const author = new Author();
  author.numberOfArticles = 8;
  console.log("author scor is:",author.calcScores());

  const editor = new Editor();
  editor.numberOfArticles = 15;
  console.log("editor scor is:",editor.calcScores());