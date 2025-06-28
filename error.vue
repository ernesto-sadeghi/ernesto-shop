<template>
    <div class="container-fluid">

        <div class="scanlines"></div>
        <div class="glitch-container">
            <!-- Floating Glitch Numbers -->
            <div class="glitch-numbers">
                <div class="glitch-digit digit-4" data-digit="4">4</div>
                <div class="glitch-digit digit-0" data-digit="0">0</div>
                <div class="glitch-digit digit-4-last" data-digit="4">4</div>
            </div>
            
            <!-- Glitch Message -->
            <p class="error-message">I DON'T EXPECT TO SEE YOU HERE</p>
            <p class="error-message"> {{ error.statusCode }} : {{ error.message }}</p>
            
            <!-- Cyber Button -->
            <NuxtLink href="/" class="cyber-btn">
                <i class="bi bi-power me-2"></i> BACK TO HOME PAGE
            </NuxtLink >
        </div>
    </div>
</template>

<script setup >
 defineProps(['error'])
</script>

<style scoped>
  
        .container-fluid {
            background: #0a0a12;
            color: white;
            font-family: 'Segoe UI', system-ui, sans-serif;
            overflow-x: hidden;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .glitch-container {
            position: relative;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            z-index: 1;
        }

        /* ---- Floating Glitch Numbers ---- */
        .glitch-numbers {
            display: flex;
            gap: 1rem;
            margin: 2rem 0;
            position: relative;
        }

        .glitch-digit {
            font-size: 8rem;
            font-weight: 900;
            color: transparent;
            background: linear-gradient(135deg, #8b5cf6, #00f676);
            -webkit-background-clip: text;
            background-clip: text;
            position: relative;
            animation: float 6s infinite ease-in-out;
            text-shadow: 0 0 15px rgba(139, 92, 246, 0.5);
        }

        .digit-4 { animation-delay: 0.2s; }
        .digit-0 { animation-delay: 0.5s; }
        .digit-4-last { animation-delay: 1s; }

        /* Glitch Effect */
        .glitch-digit::before,
        .glitch-digit::after {
            content: attr(data-digit);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #8b5cf6, #00f676);
            -webkit-background-clip: text;
            background-clip: text;
            opacity: 0.8;
        }

        .glitch-digit::before {
            color: #00f676;
            z-index: -1;
            animation: glitch-anim-1 2s infinite linear alternate-reverse;
        }

        .glitch-digit::after {
            color: #8b5cf6;
            z-index: -2;
            animation: glitch-anim-2 2s infinite linear alternate-reverse;
        }

        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
        }

        @keyframes glitch-anim-1 {
            0% { transform: translate(0); }
            20% { transform: translate(-3px, 3px); }
            40% { transform: translate(-3px, -3px); }
            60% { transform: translate(3px, 3px); }
            80% { transform: translate(3px, -3px); }
            100% { transform: translate(0); }
        }

        @keyframes glitch-anim-2 {
            0% { transform: translate(0); }
            20% { transform: translate(-6px, 6px); }
            40% { transform: translate(-6px, -6px); }
            60% { transform: translate(6px, 6px); }
            80% { transform: translate(6px, -6px); }
            100% { transform: translate(0); }
        }

        /* ---- Glitch Message ---- */
        .error-message {
            font-size: 1.5rem;
            margin: 0rem 0 2rem;
            text-transform: uppercase;
            letter-spacing: 3px;
            color: rgba(255, 255, 255, 0.8);
            position: relative;
            text-align: center;
        }

        .error-message::after {
            content: "";
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 100px;
            height: 2px;
            background: linear-gradient(90deg, transparent, #00f676, transparent);
        }

        /* ---- Cyber Button ---- */
        .cyber-btn {
            background: rgba(0, 0, 0, 0.3);
            border: 1px solid #8b5cf6;
            color: white;
            padding: 12px 30px;
            border-radius: 0;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 2px;
            position: relative;
            overflow: hidden;
            transition: all 0.3s;
            box-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
        }

        .cyber-btn:hover {
            background: rgba(139, 92, 246, 0.2);
            box-shadow: 0 0 20px rgba(139, 92, 246, 0.8);
            transform: translateY(-3px);
        }

        .cyber-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(
                90deg,
                transparent,
                rgba(255, 255, 255, 0.1),
                transparent
            );
            transition: 0.5s;
        }

        .cyber-btn:hover::before {
            left: 100%;
        }

        /* ---- Scanlines Overlay ---- */
        .scanlines {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: repeating-linear-gradient(
                0deg,
                rgba(0, 0, 0, 0.15),
                rgba(0, 0, 0, 0.15) 1px,
                transparent 1px,
                transparent 2px
            );
            pointer-events: none;
            z-index: -1;
            opacity: 0.5;
        }
</style>