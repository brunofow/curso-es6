import api from "./api";

class App {
    
    constructor() {
        this.repositories = [];

        this.formEl = document.getElementById("repo-form");
        this.inputEl = document.querySelector("input[name=repository]");
        this.listEl = document.getElementById("repo-list");

        this.registerHandlers();
    }

    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    setLoading(loading = true) {
        if(loading === true) {
            let loadingEl = document.createElement("span");
            loadingEl.setAttribute("id", "loading");
            loadingEl.textContent = "Carregando";
            
            this.formEl.appendChild(loadingEl);

        } else {
            document.getElementById("loading").remove();

        }
    }

    async addRepository(event) {
        event.preventDefault();

        this.setLoading();

        const repoInput = this.inputEl.value;

        if(repoInput.length === 0) 
            return;

        try {
            const response = await api.get(`/repos/${repoInput}`);

            const { name, description, html_url, owner: { avatar_url } } = response.data;
            

            this.repositories.push({
                name,
                description,
                avatar_url,
                html_url
            });

            this.inputEl.value = "";

            this.render();
        } catch (error) {
            alert("O repositorio não existe");
        }

        this.setLoading(false);
    }

    render() {
        this.listEl.innerHTML = "";

        this.repositories.forEach(repo => {
            let imgEl = document.createElement("img");
            imgEl.setAttribute("src", repo.avatar_url);

            let titleEl = document.createElement("strong");
            titleEl.textContent = repo.name;

            let descriptionEl = document.createElement("p");
            descriptionEl.textContent = repo.description;

            let linkEl = document.createElement("a");
            linkEl.setAttribute("target", "_blank");
            linkEl.setAttribute("href", repo.html_url)
            linkEl.textContent = "Acessar";

            let listaItemEl = document.createElement("li");
            listaItemEl.appendChild(imgEl);
            listaItemEl.appendChild(titleEl);
            listaItemEl.appendChild(descriptionEl);
            listaItemEl.appendChild(linkEl);

            this.listEl.appendChild(listaItemEl)

        })
    }

}

new App();