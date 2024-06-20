# PodCast Manager

### Descrição

Um app ao estilo Netflix, aonde possa centralizar diferentes episodios, separados pod categoria

### Dominio

Podcasts feitos em Video

### Features

 - Listar os Episódios em categorias
    -[Saúde, fitness, mentalidade, humor]
 - Filtrar episodios por nome de podcast

## Como

### Como vou implementar
    
    -Listar os Episódios em categorias
        Retornar em uma API REST um JSON com o titulo do episódio, nome do podcast,categoria, imagem da capa e o link do episódio

```js
[
{
    podcastName:"flow",
    episode:"CBUM - Flow #319",
    videoId:"pQSuQmUfS30"
    cover:"https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
    link:"https://www.youtube.com/watch?v=pQSuQmUfS30",
    category:["Saúde", "fitness"]
},
{
    podcastName:"flow",
    episode:"KIM KATAGUIRI - Flow #249",
    videoId:"KrCNKG_cPKY"
    cover:"https://i.ytimg.com/vi/KrCNKG_cPKY/maxresdefault.jpg",
    link:"https://www.youtube.com/watch?v=KrCNKG_cPKY",
    category:["Politica", "Nerd"]
}
]
```