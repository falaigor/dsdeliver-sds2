<div align="center">
    <img src="https://github.com/falaigor/dsdeliver-sds2/blob/main/screenshots/logo.png?raw=true" />
</div>

# [Web] DS Deliver
![](https://img.shields.io/github/languages/count/falaigor/petlove-web?color=%23ffd666) 
![](https://img.shields.io/github/languages/top/falaigor/petlove-web?color=%23ffd666) 
![](https://img.shields.io/github/repo-size/falaigor/petlove-web?color=%23ffd666) 
![](https://img.shields.io/github/last-commit/falaigor/petlove-web?color=%23ffd666)
<br>
<div align="center">
    <img src="https://github.com/falaigor/dsdeliver-sds2/blob/main/screenshots/mockup.png?raw=true" />
</div>

## Projeto

DS Deliver é uma aplicação de gerenciamento de pedidos para entrega. Desenvolvida na Semana DevSuperior.

## Índice
* [Instalação](#installing)
  * [Configuração](#configuring)
      * [.env](#env)
* [Uso](#usage)
  
### :rocket: Instalação
 ```
 git clone https://github.com/falaigor/dsdeliver-sdsd2
 ```
A instalçao é bem simples, dentro da pasta 'Web' executar:
```
$ yarn install
```
Or:
```
$ npm install
```
> Foi instalado e configurado o [`eslint`](https://eslint.org/) e [`prettier`](https://prettier.io/) para manter o código limpo e padronizado.

### .env
Neste arquivo você pode configurar a url da API. Renomeie o `.env.example` no diretório raiz para` .env` e então atualize com suas configurações.

[Mapbox](https://www.mapbox.com) foi usado o mapbox renderizador do mapa.

key|description|default
---|---|---
REACT_APP_ACCESS_TOKEN_MAP_BOX|Token do MAPBOX|`Adiconar o token gerado`
REACT_APP_API_URL|URL do Backend|`Adiconar URL de acesso do backend`

# Uso
Para iniciar o aplicativo, execute:
```
$ yarn start
```
Or:
```
npm run start
```
