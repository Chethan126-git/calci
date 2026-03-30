* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', sans-serif;
}

body {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #1e3c72, #2a5298);
}

.calculator {
    backdrop-filter: blur(15px);
    background: rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    padding: 20px;
    width: 320px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}

#display {
    width: 100%;
    height: 70px;
    font-size: 2rem;
    text-align: right;
    padding: 10px;
    border: none;
    border-radius: 10px;
    margin-bottom: 15px;
    background: rgba(255,255,255,0.2);
    color: white;
}

.buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
}

button {
    height: 60px;
    border: none;
    border-radius: 12px;
    font-size: 1.3rem;
    cursor: pointer;
    transition: 0.2s;
    background: rgba(255,255,255,0.2);
    color: white;
}

button:hover {
    transform: scale(1.05);
    background: rgba(255,255,255,0.3);
}

.operator {
    background: #ff9500;
}

.equal {
    background: #34c759;
}

.zero {
    grid-column: span 2;
}