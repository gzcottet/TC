export class User {
    static me() {
      
      return Promise.resolve({ id: 1, name: "Guilherme" });
    }
  }