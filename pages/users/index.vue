<template>
    <div class="container">
        <div class="row g-4">

            <div v-for="u, i in users" :key="i" class="col-md-6 col-lg-4">
                <div class="user-card">
                    <div class="user-details text-center">

                        <h4 class="user-name">{{ u.username }}</h4>
                        <hr>
                        <div class="text-start border border-3 border-black rounded-4 p-1">
                            <div class="detail-item ">
                                <i class="bi fs-5 bi-key-fill detail-icon"></i>
                                <div class="detail-content"> password :     {{ u.password }}</div>
                            </div>
                        <div class="text-start">
                            <div class="detail-item">
                                <i class="bi bi-telephone-fill detail-icon"></i>
                                <div class="detail-content">{{ u.phone }}</div>
                            </div>

                                <div class="detail-item">
                                    <i class="bi bi-envelope-fill detail-icon"></i>
                                    <div class="detail-content">
                                        <a href="mailto:john.doe@example.com">{{ u.email }}</a>
                                    </div>
                                </div>

                                <div class="detail-item">
                                    <i class="bi bi-geo-alt-fill detail-icon"></i>
                                    <div class="detail-content">
                                        {{ u.address.zipcode }}, {{ u.address.street }} <br>
                                        {{ u.address.city }}  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>





            </div>
        </div>
</div>  

</template>

<script setup>

const url = computed(() => `https://fakestoreapi.com/users`)

const { data: users, pending, error, refresh } = await useAsyncData("users", () => $fetch(url.value),
    {
        initialCache: false,
        watch: [url]
    }
)
console.log(users);

</script>

<style scoped>
.user-card {
    background: #ddd;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
    margin-bottom: 1.5rem;
    border: none;
    height: 100%;
}

.user-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.user-number {
    background: #00f676;
    color: white;
    padding: 0.5rem 1rem;
    font-weight: 600;
    display: inline-block;
    border-radius: 0 0 12px 0;
}

.user-avatar {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 50%;
    border: 3px solid white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background: #e0e0e0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1rem;
    color: #00f676;
    font-size: 2rem;
    font-weight: bold;
}

.user-name {
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: black;
    font-size: 1.25rem;
}

.user-details {
    padding: 1.5rem;
}

.detail-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 0.75rem;
}

.detail-icon {
    color: #00a676;
    margin-right: 0.75rem;
    margin-top: 0.2rem;
    flex-shrink: 0;
}

.detail-content {
    color: #000;
    font-size: 0.9rem;
}

.detail-content a {
    color: #00f676;
    text-decoration: none;
    transition: all 0.2s;
}

.detail-content a:hover {
    text-decoration: underline;
}
</style>