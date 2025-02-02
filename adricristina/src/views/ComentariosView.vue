<template>
    <div class="container">
        <h1>Comentários</h1>
        <div class="content">
            <div v-if="paginatedComments.length === 0" class="no-comments">Ainda não existem comentários.</div>
            <div v-else>
                <div v-for="comment in paginatedComments" :key="comment.id" class="comments">
                    <h3 class="name">{{ comment.name }}</h3>
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
            itemsPerPage: 2,
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
    align-items: start;
    justify-content: space-between;
    background-color: #f3f3f3;
    font-family: "Poppins", serif;
    padding: 23px;
    border-radius: 10px;
    margin: 10px;
}

.name {
    font-size: 22px;
    font-weight: 400;
    color: rgb(0, 0, 0, 25%);
}

.comment {
    font-size: 22px;
    font-weight: 300;
    color: rgb(0, 0, 0, 75%);
}

.date {
    font-size: 22px;
    font-weight: 300;
    color: rgb(0, 0, 0, 25%);
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
</style>