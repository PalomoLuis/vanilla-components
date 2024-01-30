const codes = {
    social_card_code: `
    <div class="social-card py-4 px-md-5 rounded-5 bg-light d-md-grid"
        style="grid-template-columns: 15% 1fr 20%; gap: 2rem; align-items: center;">
        <div class="position-relative w-100 h-100">
            <div class="border border-2 border-white shadow rounded-circle overflow-hidden position-absolute"
                style="width: 90%; aspect-ratio: 1/1; top: -3rem;">
                <img src="../images/avatar-1.jpg" alt="" class="img-fluid rounded-full">
            </div>
        </div>
        <div class="ml-md-3">
            <p class="mb-1 fw-bold fs-5">Head title Lorem ipsum dolor sit.</p>
            <p class="m-0" style="font-size:0.91rem; line-height: 1.1rem;">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet esse sint voluptatem ipsa ex excepturi.</p>
        </div>
        <button class="btn btn-dark rounded-pill px-4 py-2"
            style="justify-self: end;">Find more</button>
    </div>
    `
}

export { codes }