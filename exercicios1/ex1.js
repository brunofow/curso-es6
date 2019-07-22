class Usuario {
    
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
    }

    isAdmin() {
        if(this.admin) {
            return true;
        } else {
            return false;
        }
    }
}

class Admin extends Usuario {

    constructor(email, senha) {
        super(email, senha);

        this.admin = true;
    }
}

const user1 = new Usuario("email@teste.com", "1234");
const adm1 = new Admin("email2@test.com", "senha");

console.log(user1.isAdmin())
console.log(adm1.isAdmin())