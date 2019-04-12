import { environment } from '../environments/environment';
let link = '';
if (environment.production) {
    link = ' ';  // Producao
} else {
    link = ' '; // Desenvolvimento
}
export const API_CONFIG = {
    url: link
};
