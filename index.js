#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

// --- DETEKSI KOALISI (Package Manager) ---
const getPackageManager = () => {
    const cwd = process.cwd();
    if (fs.existsSync(path.join(cwd, 'bun.lockb'))) return 'bun';
    if (fs.existsSync(path.join(cwd, 'pnpm-lock.yaml'))) return 'pnpm';
    if (fs.existsSync(path.join(cwd, 'yarn.lock'))) return 'yarn';
    return 'npm';
};

const pm = getPackageManager(); 
const args = process.argv.slice(2);
const fullCommand = args.join(' ');

// Helper jalanin command
const runCommand = (cmdArgs) => {
    try {
        const finalCmd = `${pm} ${cmdArgs}`;
        console.log(`[SYSTEM] Menggunakan mesin penggerak: ${pm.toUpperCase()}`);
        execSync(finalCmd, { stdio: 'inherit' });
    } catch (error) {
        process.exit(1);
    }
};

console.log("\n[GIB RUN - OFFICIAL CLI]");
console.log("Mengembalikan fungsi 'Run' ke jalan yang benar.\n");

// --- LOGIKA UTAMA ---

// Command: gib run dev / gib run start
if (args[0] === 'run') {
    if (!args[1]) {
        console.log("[WARN] Mau run apa? Harap spesifik.");
    } else {
        console.log(`[INFO] Memerintahkan bawahan untuk lari... (${args[1]})`);
        if (args[1] === 'dev') console.log("[INFO] Menyiapkan asupan gizi codingan...");
        runCommand(`run ${args[1]}`);
    }
}

// Command: gib install / gib i
else if (args[0] === 'install' || args[0] === 'i') {
    console.log("[INFO] Membagikan dependencies ke dalam node_modules...");
    const installArgs = args.length > 1 ? args.slice(1).join(' ') : 'install';
    
    // Penyesuaian syntax bun
    if (pm === 'bun' && args.length > 1) {
        execSync(`bun add ${args.slice(1).join(' ')}`, { stdio: 'inherit' });
    } else {
        runCommand(installArgs);
    }
}

// Command: gib fufufafa (FITUR PRANK)
else if (args[0] === 'fufufafa') {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

    console.log("\n[ALERT] AKSES KOMANDO RAHASIA: PROTOKOL PEMBERSIHAN JEJAK.");
    console.log("[WARN] Semua file di folder ini akan DIHAPUS.");
    console.log("(Fitur ini untuk menghilangkan bukti, bukan nyimpen data di Redis).");

    rl.question("\nKetik 'FUFUFAFA' untuk eksekusi: ", (answer) => {
        if (answer === 'FUFUFAFA') {
            console.log("\n[ACTION] MEMULAI OPERASI BUMI HANGUS...");
            const files = fs.readdirSync(process.cwd());
            
            let delay = 500;
            files.forEach(file => {
                if(file !== 'index.js' && file !== 'node_modules') {
                     setTimeout(() => {
                        console.log(`[DELETED] Menghapus jejak: ${file} ... SUKSES`);
                        // HAPUS TANDA KOMENTAR DI BAWAH JIKA INGIN HAPUS BENERAN
                        // fs.rmSync(path.join(process.cwd(), file), { recursive: true, force: true });
                     }, delay);
                     delay += 300;
                }
            });

            setTimeout(() => {
                console.log("\n[STATUS] Operasi Selesai. Anda Aman.");
                process.exit(0);
            }, delay + 1000);
        } else {
            console.log("[ERROR] Kode salah. Operasi dibatalkan.");
            process.exit(0);
        }
    });
}

// Command Tidak Dikenal (Sindir Sebelah)
else {
    if (fullCommand.length > 0) {
        runCommand(fullCommand); 
    } else {
        console.log("[?] Bingung Mas?");
        console.log("Gunakan: 'gib run dev' atau 'gib install'.");
        console.log("\n[DISCLAIMER]");
        console.log("Ini GIB RUN (Task Runner).");
        console.log("Kalau nyari GIB RUN yang isinya REDIS/DATABASE, itu di sebelah.");
        console.log("Di sini kita KERJA (Run), bukan NONGKRONG (Store).");
    }
}