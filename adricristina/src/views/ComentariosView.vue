<template>
    <div>
        <div class="container">
            <h1>Comentários</h1>
            <div class="content">
                <div v-if="paginatedComments.length === 0" class="no-comments">Ainda não existem comentários.</div>
                <div v-else>
                    <div v-for="comment in paginatedComments" :key="comment.id" class="comments">
                        <div class="comment-header">
                            <h3 class="name">{{ comment.name }}</h3>
                        </div>
                        <p class="comment">{{ comment.text }}</p>
                        <p class="date">{{ comment.date }}</p>
                    </div>
                    <div class="pagination">
                        <button @click="prevPage" :disabled="currentPage === 1">Anterior</button>
                        <span class="page-number">{{ currentPage }}</span>
                        <button @click="nextPage" :disabled="currentPage === totalPages">Próximo</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <h1>Deixe seu comentário</h1>
            <div class="content">
                <div class="info">
                    <input type="text" placeholder="Nome" class="add-name" v-model="name" />
                    <input type="text" placeholder="E-mail" class="add-email" v-model="email" />
                </div>
                <div class="info">
                    <textarea v-model="text" placeholder="Digite seu comentário" class="add-comment"></textarea>
                    <button @click="sendComment">Enviar comentário</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ComentariosView',
    data() {
        return {
            comments: [
                {
                    id: 1,
                    name: "Maria Fernanda",
                    text: "Excelente profissional, super recomendo!",
                    date: "23 de janeiro de 2025"
                },
                {
                    id: 2,
                    name: "Maria Gabriela",
                    text: "Ótimo atendimento!",
                    date: "02 de janeiro de 2025"
                },
                {
                    id: 3,
                    name: "Maria Fernanda",
                    text: "Excelente profissional, super recomendo!",
                    date: "18 de dezembro de 2024"
                },
            ],
            currentPage: 1,
            itemsPerPage: 3,
            name: '',
            email: '',
            text: '',
        };
    },
    computed: {
        totalPages() {
            return Math.ceil(this.comments.length / this.itemsPerPage);
        },
        paginatedComments() {
            const start = (this.currentPage - 1) * this.itemsPerPage;
            return this.comments.slice(start, start + this.itemsPerPage);
        },
    },
    methods: {
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        },
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },
        sendComment() {
            if (!this.name || !this.email || !this.text) {
                alert("Preencha todos os campos!");
            } else {
                const newComment = {
                    id: this.comments.length + 1,
                    name: this.name,
                    email: this.email,
                    text: this.text,
                    date: new Date().toLocaleDateString("pt-BR")
                };
                this.comments.push(newComment);
                this.name = '';
                this.email = '';    
                this.text = '';
            }
        }
    },
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 200px;
}

h1 {
    font-size: 28px;
    color: #292626;
    text-indent: -500px;
    margin-bottom: 5px;
    font-family: "Poppins", serif;
    font-weight: 400;
}

.content {
    background-color: rgba(39, 157, 169, 0.40);
    margin: 10px 130px;
    padding: 40px 20px;
    max-width: 1000px;
    width: 100%;
    border-radius: 25px;
}

.comments {
    display: flex;
    flex-direction: column;
    background-color: #f3f3f3;
    font-family: "Poppins", serif;
    padding: 23px;
    border-radius: 10px;
    margin: 10px;
    position: relative;
    min-height: 100px;
}

.comment-header {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.name {
    font-size: 16px;
    font-weight: 400;
    color: rgb(0, 0, 0, 25%);
}

.comment {
    font-size: 18px;
    font-weight: 300;
    margin-top: auto;
    color: rgb(0, 0, 0, 75%);
}

.date {
    font-size: 16px;
    font-weight: 300;
    color: rgb(0, 0, 0, 25%);
    align-self: flex-end;
    margin-top: auto;
    text-align: right;
}

.pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    gap: 10px;
    font-weight: 100;
}

.pagination button {
    background: none;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
    font-size: 16px;
    font-family: "Poppins", serif;
    color: #fff
}

.pagination button:disabled {
    background: none;
    cursor: not-allowed;
    color: #d8d7d7;
}

.pagination .page-number {
    font-size: 18px;
    font-weight: 300;
    color: #292626;
    font-family: "Poppins", serif;
}

.no-comments {
    text-align: center;
    font-size: 20px;
    font-weight: 300;
    color: rgb(0, 0, 0, 50%);
    padding: 20px;
}

.info {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 20px;
    width: 100%;
    flex-wrap: wrap;
}

.add-name,
.add-email {
    flex: 1;
    height: 40px;
    border-radius: 10px;
    border: none;
    padding: 10px;
    font-size: 16px;
    font-weight: 300;
    color: #292626;
    font-family: "Poppins", serif;
    background-color: #f3f3f3;
}

.add-comment {
    width: 100%;
    height: 150px;
    border-radius: 10px;
    border: none;
    padding: 10px;
    font-size: 16px;
    font-weight: 300;
    color: #292626;
    font-family: "Poppins", serif;
    background-color: #f3f3f3;
    resize: none;
}

.info button {
    width: 30%;
    height: 45px;
    border-radius: 10px;
    border: none;
    background-color: rgba(39, 157, 169, 0.8);
    font-size: 18px;
    font-weight: 400;
    color: white;
    font-family: "Poppins", serif;
    cursor: pointer;
    transition: 0.3s;
}

.info button:hover {
    background-color: rgba(39, 157, 169, 1);
}
</style>