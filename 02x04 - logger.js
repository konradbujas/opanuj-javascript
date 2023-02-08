export class Logger {
    log() {
        console.log('test logger');
    }
}

// aby przeglądarka odczytała dane z modułu, musimy dodać atrybut type="module" do tagu script (w miejscu dołączania skryptu JS)