## lab-ds

Aplicação desenvolvida durante o Ignite Lab promovido pela Rocketseat
O objetivo da aplicação é desenvolver um design system com tecnologias modernas de UI/UX.

### Tecnologias utilizadas

Figma - site com a finalidade de proporcionar ferramentas de design de interfaces

[ReactJS](https://pt-br.reactjs.org/) - biblioteca javascript para criar os componentes JSX da aplicação e rodas no browser

[Vite](https://vitejs.dev/guide/) - setup de build que fornece um servidor de desenvolvimento moderno com melhorias para módulos ES e processos de bundle mais otimizados quando o código vai para produção

```
yarn create vite
npm i
```

[Tailwindcss](https://tailwindcss.com/) - framework css que implementa classes prontas de estilização (Baixar sua extensão)
[PostCss](https://postcss.org/) - bundler para o css, automatiza tarefas dentro do css (-p para criar seu arquivo de configuração, baixar sua extensão)
Autoprefixer - Plugin do postcss que adiciona alguns prefixos do css (mox, webkit),

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

[Storybook](https://storybook.js.org/docs/react/get-started/introduction) - Biblioteca utilizada juntamente ao desenvolvimento do código para documentar os componentes, facilita a visualização dos componentes em todas as suas variações de forma documentada (vai criar uma pasta .storybook, baixar a extensão mdx, sempre que alguma informação de um arquivo.stories modificar as atualizações são feitas na documentação localhost)

```
npx sb init --builder @storybook/builder-vite --use-npm
npm run storybook
```

[clsx](https://www.npmjs.com/package/clsx) - pacote que permite aplicar classes em componentes de maneira condicional

```
npm install --save clsx
```

[radix-ui](https://www.radix-ui.com/) - biblioteca de componentes que fornece componentes de UI para a aplicação, utilizado para design systems (instalar o componente slot)

```
npm install @radix-ui/react-slot
```

[Slot](https://www.radix-ui.com/docs/primitives/utilities/slot) - pega as propriedades de um componente e repasa para o primeiro componente que vem com o children

[Phosphor](https://phosphoricons.com/) - biblioteca de ícones para utilizar com react

```
npm i phosphor-react
```
