<h1>backend stundents manager</h1>
<br>
<h2><img style="height: 25px" src="https://github.githubassets.com/images/icons/emoji/unicode/1f4d1.png" />  Sobre o projeto</h2>
<p>Desafio imposto a mim por <a href="https://github.com/kaiqueCovo" target="__blank">Kaique Covo</a> que consiste no backend e frontend de uma C.R.U.D de alunos, usando typescript tanto no backend e no frontend.</p>

<br>

<h3>⚠️ O projeto ainda não está em sua versão final, esta em fase de desenvolvimento ⚠️</h3>

<br />

<h2><img style="height: 25px" src="https://github.githubassets.com/images/icons/emoji/unicode/1f680.png" /> Técnologias usadas no projeto</h2>
<p>
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
    <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
    <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" />
    <img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" />
    <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" />
    <img src="https://img.shields.io/badge/redis-%23DD0031.svg?&style=for-the-badge&logo=redis&logoColor=white" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
</p>

<br>

<li><strong>Docker</strong> foi usado para armazenar o banco de dados <strong>postgreSQL</strong> e o <strong>Redis</strong></li>
<li><strong>Prisma</strong> foi usado com ORM para dar instruções para o banco de dados</li>
<li><strong>Redis</strong> foi usado guardar informações no cache</li>

<br>
<h2><img style="height: 25px" src="https://github.githubassets.com/images/icons/emoji/unicode/2139.png" />  Pré-requisitos: </h2>
<li><a href="https://git-scm.com/">Git</a></li>
<li><a href="https://www.docker.com/products/docker-desktop/">Docker Desktop</a></li>
<li><a href="https://nodejs.org/en/">Node.js</a></li>


<br>

```bash
    # clonar repositório
    git clone http://github.com/ruanvsrateira/backend-students-manager.git

    # Entrar no repositório
    cd backend-students-manager

    # Instalação de dependencias
    npm i 

    # Iniciar Container com banco de dados
    docker-compose up -d
    
    # Criar tabelas no banco de dados
    npm run prisma
    
    # Rodar api
    npm run dev
```
<hr>


Desenvolvido por <a href="https://www.linkedin.com/in/ruanvsrateira" target="__blank">Ruan Victor</a>
