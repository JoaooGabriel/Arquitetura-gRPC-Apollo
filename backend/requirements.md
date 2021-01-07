- Explicar GRPC (sintaxe, fluxo de criação)

# gRPC - é um framework open source de comunicação, usando protobuf para serializar dados e http/2 para comunicação

<ol>
    <li>A sintaxe do gRPC é simples e de alto nivel</li>
    <li>Seus arquivos tem a extensão .proto</li>
</ol>

# Ciclo de implementação do gRPC

<ul>
    <li>Criar o arquivo proto
    <ol>
    <li>Abra a pasta services/NomeDoServiçoASerCriado, em seguida acesse a pasta pb</li>
    <li>Abra o arquivo messages.proto (o nome deve se manter nesse) </li>
    <li>Monte os tipos de dados que serão transmitidos de acordo com os exemplos (message - contem os dados)</li>
    <li>O ultimo recurso do arquivo tem por necessidade possuir a keyword service( contendo as funções )</li>
    <li>Só pode possuir 1 arquivo proto por componente</li>
    </ol>
    <li>O arquivo ServiceNameMethods.js deve seguir o mesmo padrão dos outros, alterando apenas o nome da variavel `thisService`, para o nome da pasta do service (siga os padrões) </li>
    </li>    
    <li>Na pasta implementation irá acontecer a lógica do service, diferente do REST que utiliza-se request e response, no service usa call e callback </li>
    <li>Apartir da call pode se recuperar os dados que serão enviados na requisição</li>
    <li>Com os dados é realizado a lógica do componente, que trabalha em cima do Model do banco de dados</li>
    <li>Retornar no callback o mesmo formato que é informado no arquivo proto</li>
</ul>

<ul> 
    <li>Na API deverá criar um arquivo proto na pasta pb/ com o nome de alpha + Nome do serviço (padrões de código podem mudar)</li>
    <li>Na pasta service da API deverá seguir o exemplo do modelo, e apenas trocar os nomes</li>
    <li>Criar apenas um controller para cada service</li>
    <li>Após isso configurar a rota em que será chamada tal service (siga o modelo ja feito) </li>
</ul>


# Explicar Comunicação entre componentes
- Os services são individuais
- A API consome os services e realiza a interligação caso necessário
- Todos os services utilizam-se do mesmo banco de dados