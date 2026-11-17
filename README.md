# Lercruzer

Site do restaurante Lercruzer, desenvolvido com Angular standalone.

## Requisitos

- Node.js e npm

## Desenvolvimento

```bash
npm install
npm start
```

O aplicativo fica disponível em `http://localhost:4200/`.

```bash
npm run build
npm test
```

## Estrutura

```text
src/app/
  components/
    footer/
    header/
  pages/
    cardapio/
    contato/
    eventos/
    faleconosco/
    inicio/
    reserva/
    sobre/
  app.component.*
  app.routes.ts
```

As páginas e componentes são standalone e possuem arquivos `.component.ts`,
`.component.html`, `.component.css` e `.component.spec.ts`. Para gerar um novo
componente com o mesmo padrão:

```bash
npx ng generate component pages/nova-pagina --standalone
```

As páginas de contato e reserva validam os dados no navegador. O envio ainda
não está conectado a um serviço ou backend. Endereço, telefone, horários,
mapa e itens/preços do cardápio são exemplos e devem ser substituídos pelos
dados oficiais antes da publicação.

## Fluxo Git para trabalho em dupla

Cada pessoa trabalha em uma branch própria para cada tarefa; não desenvolvam
simultaneamente na mesma branch. Antes de começar:

```bash
git switch main
git pull --ff-only origin main
git switch -c feature/nome-da-tarefa
```

Façam commits pequenos e relacionados. Antes de adicionar arquivos, confiram
`git status` e adicionem apenas os caminhos da própria tarefa:

```bash
git status
git add src/app/pages/nome-da-pagina src/app/components
git commit -m "feat: adiciona página da tarefa"
git push -u origin feature/nome-da-tarefa
```

Abra um Pull Request da branch de feature para `main` e peça revisão da outra
pessoa. Com o GitHub CLI autenticado, por exemplo:

```bash
gh pr create --base main --head feature/nome-da-tarefa --title "feat: nome da tarefa" --body "Resumo e validações"
```

Após aprovação e merge do Pull Request, atualize a cópia local:

```bash
git switch main
git pull --ff-only origin main
git branch -d feature/nome-da-tarefa
```

Se `main` avançar enquanto uma feature ainda está em andamento, atualizem a
branch sem reescrever commits já enviados:

```bash
git switch feature/nome-da-tarefa
git fetch origin
git merge origin/main
```

Se houver conflito, conversem sobre o arquivo afetado, resolvam e testem antes
de continuar:

```bash
git status
# edite os arquivos em conflito e remova os marcadores <<<<<<<, =======, >>>>>>>
git add caminho/do/arquivo
git commit
npm test
npm run build
git push
```

Para reduzir conflitos, combinem quem é responsável por cada página/componente
e evitem editar o mesmo arquivo ao mesmo tempo. Alterações compartilhadas
(como `app.routes.ts` e `styles.css`) devem ser comunicadas e revisadas no PR.
