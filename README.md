# ivanhoinacki (Angular 7 + Electron)

## Visão Geral
SPA desenvolvida em Angular 7, com integração para desktop via Electron. Estrutura modular, componentes reutilizáveis e páginas públicas/privadas.

---

## Como rodar o projeto

### 1. Pré-requisitos
- **Node.js 16.x** (use [nvm](https://github.com/nvm-sh/nvm) para gerenciar versões)
- **npm 8.x**

### 2. Instalação
```sh
nvm install 16
nvm use 16
cd client
npm install
```

### 3. Rodando em modo desenvolvimento
```sh
npx ng serve -o
```
Acesse: [http://localhost:4200](http://localhost:4200)

---

## Estrutura de Pastas
```
src/
  app/
    comp/components/         # Componentes reutilizáveis
    pages/                   # Páginas (notFound, privatePages, resume-pt, resume-us, main)
  assets/                    # Imagens, libs, fontes
  environments/              # Configurações de ambiente
```

---

## Arquitetura (Resumo)
- **Angular 7**: SPA modular, componentes e serviços.
- **Electron**: Empacotamento desktop via `ngx-electron@1.0.4`.
- **Sass**: Temas customizados, integração com Angular Material.
- **Dependências legadas**: Bootstrap 4, jQuery, Moment.js, etc.

### Pontos de atenção
- Stack legado: Angular 7 está fora de suporte oficial.
- Dependências desatualizadas: vulnerabilidades conhecidas.
- Avisos de depreciação do Sass: não afetam o funcionamento imediato.

---

## Recomendações de Governança
- Planejar atualização do Angular para versão LTS.
- Revisar e atualizar dependências críticas.
- Automatizar testes e CI/CD.
- Documentar fluxos críticos e regras de negócio.

---

## Avisos de Depreciação do Sass

> **Importante:**
> O projeto utiliza Angular 7 e dependências legadas (ex: @angular/material, saturn-datepicker) que só suportam o novo padrão de módulos do Sass (`@use`, `@forward`) a partir do Angular 12+.
>
> Por isso, alguns avisos de depreciação do Sass (ex: uso de `@import`, funções antigas, divisões com `/`) podem aparecer durante o build. Esses avisos **não afetam o funcionamento** do projeto, mas só serão totalmente eliminados com a atualização do Angular e das dependências para versões mais recentes.
>
> **Recomendação:** Planeje a migração para Angular 12+ para garantir sustentabilidade e eliminar todos os avisos de depreciação.

---

## Diagrama C4 (Container)
```plantuml
@startuml
Person(dev, "Desenvolvedor")
System_Boundary(s1, "SPA Angular/Electron") {
  Container(web, "Frontend Angular", "Angular 7", "Interface do usuário, lógica de apresentação")
  Container(electron, "Electron", "Node.js/Electron", "Empacotamento desktop, acesso a APIs nativas")
  ContainerDb(api, "APIs Externas", "REST/GraphQL", "Integração com serviços externos (opcional)")
}
Rel(dev, web, "Desenvolve e mantém")
Rel(web, electron, "Executa dentro de")
Rel(web, api, "Consome dados de", "HTTP/HTTPS")
@enduml
```

---

## Contato
Dúvidas técnicas, sugestões ou melhorias: abra uma issue ou entre em contato com o mantenedor. 