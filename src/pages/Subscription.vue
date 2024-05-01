
<template>
  <section class="bg-gray-900 p-10 flex justify-center items-center h-screen">
    <div class="card-container flex gap-4">
      <!-- Non-Pro Plan Card -->
      <div class="card bg-gray-800 hover:scale-105 transition-transform duration-300">
        <h5 class="card-title">Non-Pro Plan (Free)</h5>
        <p class="card-price">Free</p>
        <ul class="feature-list">
          <li class="feature included">Browser Extension</li>
          <li class="feature included">Autofill</li>
          <li class="feature included">Card</li>
          <li class="feature not-included">Unlimited Account</li>
          <li class="feature not-included">Categorization</li>
          <li class="feature not-included">Password Generator</li>
          <li class="feature not-included">Password Health Checkup</li>
        </ul>
        <button
          type="button"
          class="cta-button"
          @click="redirectToPaymentPage"
        >
          Free
        </button>

      </div>
      
      <!-- Standard Plan Card -->
      <div class="card bg-gray-800 hover:scale-105 transition-transform duration-300">
        <h5 class="card-title">Standard Plan</h5>
        <p class="card-price">₱99 <span>/month</span></p>
        <ul class="feature-list">
          <li class="feature included">Browser Extension</li>
          <li class="feature included">Autofill</li>
          <li class="feature included">Card</li>
          <li class="feature included">Unlimited Account</li>
          <li class="feature included">Categorization</li>
          <li class="feature included">Password Generator</li>
          <li class="feature included">Password Health Checkup</li>
        </ul>
        <button
          type="button"
          class="cta-button"
          @click="redirectToPaymentPage"
        >
          Activate Plan
        </button>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    redirectToPaymentPage() {
      this.$router.push({ name: 'payments' });
    }
  }
}
</script>

<style scoped>
.card-container {
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 2rem;
  padding: 2rem;
}

.card {
  flex: 1;
  padding: 3rem;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #2D3748;
  transition: transform 0.3s ease-in-out;
}

.card:hover {
  transform: scale(1.05);
}

.card-title {
  font-size: 2rem;
  color: #E2E8F0;
  margin-bottom: 1rem;
}

.card-price {
  font-size: 3rem;
  font-weight: bold;
  color: #F7FAFC;
}

.card-price span {
  font-size: 1.25rem;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 2rem 0;
}

.feature {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #CBD5E1;
  text-decoration: line-through;
}

.feature.included {
  text-decoration: none;
}

.feature.included::before,
.feature.not-included::before {
  margin-right: 0.5rem;
  font-size: 1.5rem;
}

.feature.included::before {
  content: "✔";
  color: #10b981;
}

.feature.not-included::before {
  content: "✘";
  color: #ef4444;
}

.cta-button {
  background-color: #2563eb;
  color: white;
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
}

.cta-button:hover {
  background-color: #1d4ed8;
  transform: translateY(-3px);
}
</style>
