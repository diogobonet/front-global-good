# GlobalGood - PT-BR

GlobalGood é um produto de e-commerce B2B que oferece um sistema customizável para empresas. Nosso foco é atender empresas de pequeno e médio porte que desejam ingressar no mercado digital, facilitando a transformação digital através de uma plataforma moderna e funcional.

## Sobre o Projeto

Este projeto foi desenvolvido como parte das disciplinas:
- **Desenvolvimento Orientado a Reúso de Software**
- **Medição e Análise de Processos e Produtos de Software**

Cursadas no 6° período do curso de Engenharia de Software.

## Tecnologias Utilizadas

### Front-End
- **React.js**: Interface do usuário moderna e responsiva.
- **Axios**: Comunicação com o backend via requisições HTTP.

### Back-End
- **NestJS**: Framework robusto para desenvolvimento backend.
- **MySQL**: Banco de dados relacional utilizado.
- **TypeORM**: ORM utilizado com a abordagem Database First.

## Arquitetura e Padrões de Projeto

### Arquitetura em Camadas
Organiza o código em camadas distintas:
- **Camada de Apresentação (Controller):** Recebe requisições e envia respostas.
- **Camada de Aplicação/Serviço:** Contém a lógica de negócios.
- **Camada de Configuração/Infraestrutura:** Gerencia variáveis de ambiente e definições dinâmicas de provedores.

### Padrões Adotados
- **Factory Pattern:** Utilizado para instanciar objetos com base em lógica configurável.
- **Arquitetura Orientada a Configuração:** Permite alterar comportamentos do sistema via ajustes em configurações, sem modificar o código.
- **Princípios SOLID:**
  - **Single Responsibility Principle:** Cada classe possui uma única responsabilidade.
  - **Open/Closed Principle:** O código está aberto para extensão e fechado para modificações.
  - **Dependency Injection:** Facilita a inversão de controle para gerenciar dependências de forma eficiente.

## Pontos de Variabilidade

O sistema permite que os clientes personalizem:

### Geração de SKU
- **Opções:**
  - Randômico
  - Hexadecimal (baseado nas informações do produto)
  - Recuperação dos 10 caracteres centrais

### Política de Devolução
- Período de devolução configurável.

### Configuração de Frete
- Valor mínimo para frete.
- Taxa por quilômetro com a fórmula:
  ```
  frete = custo_base + (distância * taxa_por_km)
  ```

### Recomendação de Produtos
- Parâmetros ajustáveis:
  - **sales_weight:** Peso das vendas
  - **rating_weight:** Peso das avaliações
  - **popularity_weight:** Peso da popularidade
- Fórmula:
  ```
  pontuação = (vendas * sales_weight) + (avaliações * rating_weight) + (popularidade * popularity_weight)
  ```

### Pontos de Fidelidade
- Ativação ou desativação do recurso.
- Opções de acumulação:
  - Valor da compra
  - Número de transações
- Configuração da quantidade de pontos por opção escolhida.

## Instalação e Execução

### Pré-requisitos
- Node.js
- MySQL

### Instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/diogobonet/global-good
   ```
2. Navegue até a pasta do projeto:
   ```bash
   cd GlobalGood
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```

### Execução
1. Configure as variáveis de ambiente:
   - Exemplo no arquivo `.env.example`.
2. Execute o backend:
   ```bash
   npm run start:backend
   ```
3. Execute o frontend:
   ```bash
   npm run start:frontend

### Documentação Gerada
Durante a disciplina **Medição e Análise de Processos e Produtos de Software**, foram gerados os seguintes artefatos:
- Público-Alvo, Mapa de Empatia e Persona
- Análise por Pontos de Função
- COCOMO
- COCOMO II
- Especificação de Casos de Uso
- Estimativa de Classe
- GQM (Goal Question Metric)
- Matriz de Rastreabilidade
- Modelo Lógico de Banco de Dados
- UCP (Use Case Points)
   ```

## Licença

Este projeto está licenciado sob a [Apache-2.0](Apache-2.0).

---

# GlobalGood - EN

GlobalGood is a B2B e-commerce product that offers a customizable system for companies. Our focus is to serve small and medium-sized businesses looking to enter the digital market, facilitating digital transformation through a modern and functional platform.

## About the Project

This project was developed as part of the following courses:
- **Software Reuse-Oriented Development**
- **Measurement and Analysis of Software Processes and Products**

Taken during the 6th semester of the Software Engineering program.

## Technologies Used

### Front-End
- **React.js**: Modern and responsive user interface.
- **Axios**: Backend communication via HTTP requests.

### Back-End
- **NestJS**: Robust framework for backend development.
- **MySQL**: Relational database used.
- **TypeORM**: ORM used with the Database First approach.

## Architecture and Design Patterns

### Layered Architecture
Organizes code into distinct layers:
- **Presentation Layer (Controller):** Handles requests and sends responses.
- **Application/Service Layer:** Contains business logic.
- **Configuration/Infrastructure Layer:** Manages environment variables and dynamic provider definitions.

### Adopted Patterns
- **Factory Pattern:** Used to instantiate objects based on configurable logic.
- **Configuration-Oriented Architecture:** Enables behavior adjustments via configuration changes without modifying the code.
- **SOLID Principles:**
  - **Single Responsibility Principle:** Each class has a single responsibility.
  - **Open/Closed Principle:** Code is open for extension and closed for modification.
  - **Dependency Injection:** Facilitates inversion of control to efficiently manage dependencies.

## Variability Points

The system allows clients to customize:

### SKU Generation
- **Options:**
  - Random
  - Hexadecimal (based on product information)
  - Extracting the 10 central characters

### Return Policy
- Configurable return period.

### Shipping Configuration
- Minimum shipping cost.
- Per kilometer rate with the formula:

```
shipping_cost = base_cost + (distance * rate_per_km)
```

### Product Recommendation
- Adjustable parameters:
- **sales_weight:** Sales weight
- **rating_weight:** Ratings weight
- **popularity_weight:** Popularity weight
- Formula:

```
score = (sales * sales_weight) + (ratings * rating_weight) + (popularity * popularity_weight)
```

### Loyalty Points
- Enable or disable the feature.
- Accumulation options:
- Purchase value
- Number of transactions
- Configurable point allocation based on the chosen option.

## Installation and Execution

### Prerequisites
- Node.js
- MySQL

### Installation
1. Clone the repository:
 ```bash
 git clone https://github.com/diogobonet/global-good
 ```
2. Navigate to the project directory:
```bash
cd GlobalGood
```
3. Install dependencies:
```bash
npm install
```

### Execution
1. Configure environment variables:
    - Example in the ```.env.example```. file.

2. Start the backend:
```bash
npm run start:backend
```
3. Start the frontend:
```bash
npm run start:frontend
```
### Documentation Generated
During the **Measurement and Analysis of Software Processes and Products** course, the following artifacts were produced:
- Target Audience, Empathy Map, and Persona
- Function Point Analysis
- COCOMO
- COCOMO II
- Use Case Specification
- Class Estimation
- GQM (Goal Question Metric)
- Traceability Matrix
- Logical Database Model
- UCP (Use Case Points)

### License
This project is licensed under the Apache-2.0 license.