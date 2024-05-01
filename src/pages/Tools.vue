<template>
    <section class="bg-dark min-h-screen flex flex-col items-center justify-center p-4">
      <div class="max-w-lg mx-auto text-center bg-dark-800 px-8 py-10 rounded-xl shadow-lg space-y-8">
        <h1 class="text-3xl text-primary font-bold mb-8">Password Tools</h1>
        
        <div class="space-y-6">
          <h2 class="text-xl text-primary font-semibold">Password Generator</h2>
          <input
            type="number"
            v-model.number="passwordLength"
            placeholder="Password Length (8-32)"
            class="password-input"
          />
          <input
            type="text"
            v-model="passwordSeed"
            placeholder="Seed characters (optional)"
            class="password-input"
          />
          <div class="flex justify-between mt-2">
            <div>
              <label><input type="checkbox" v-model="includeNumbers"/> Include Numbers</label>
            </div>
            <div>
              <label><input type="checkbox" v-model="includeSymbols"/> Include Symbols</label>
            </div>
          </div>
          <button
            @click="generatePassword"
            class="generate-button"
          >
            Generate Password
          </button>
          <input
            type="text"
            v-model="generatedPassword"
            class="password-input"
            readonly
          />
        </div>
  
        <div class="space-y-6">
          <h2 class="text-xl text-primary font-semibold">Password Health Check</h2>
          <input
            type="text"
            v-model="passwordToCheck"
            placeholder="Enter password to check"
            class="password-input"
          />
          <button
            @click="checkPasswordHealth"
            class="check-button"
          >
            Check Health
          </button>
          <div v-if="healthResult" class="health-result">{{ healthResult }}</div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const generatedPassword = ref('');
      const passwordSeed = ref('');
      const passwordLength = ref(12);
      const passwordToCheck = ref('');
      const healthResult = ref('');
      const includeNumbers = ref(true);
      const includeSymbols = ref(false);
  
      const generatePassword = () => {
        const length = Math.max(8, Math.min(passwordLength.value || 12, 32)); // Constrain length between 8 and 32
        let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" + 
                      (includeNumbers.value ? "0123456789" : "") + 
                      (includeSymbols.value ? "!@#$%^&*()_+~`|}{[]:;?><,./-=" : "");
  
        let retVal = "";
        for (let i = 0; i < length; ++i) {
          retVal += charset.charAt(Math.floor(Math.random() * charset.length));
        }
        generatedPassword.value = retVal;
      };
  
      const checkPasswordHealth = () => {
        if (passwordToCheck.value.length < 8) {
          healthResult.value = "Weak";
        } else if (passwordToCheck.value.length < 12) {
          healthResult.value = "Moderate";
        } else {
          healthResult.value = "Strong";
        }
      };
  
      return {
        generatedPassword,
        passwordSeed,
        passwordLength,
        passwordToCheck,
        healthResult,
        includeNumbers,
        includeSymbols,
        generatePassword,
        checkPasswordHealth,
      };
    },
  };
  </script>
  
  <style scoped>
  .bg-dark {
    background-color: #1A202C;
  }
  
  .bg-dark-800 {
    background-color: #2D3748;
  }
  
  .text-primary {
    color: #63B3ED;
  }
  
  .generate-button, .check-button {
    width: 100%;
    padding: 10px 20px;
    background-color: #4FD1C5;
    color: #ffffff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  
  .generate-button:hover, .check-button:hover {
    background-color: #38B2AC;
  }
  
  .password-input {
    width: 100%;
    padding: 10px 15px;
    border-radius: 8px;
    border: 2px solid #2C5282;
    color: #E2E8F0;
    background-color: transparent;
  }
  
  .health-result {
    color: #68D391;
    font-size: 16px;
  }
  </style>
  