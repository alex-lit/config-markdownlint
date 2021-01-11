# Конфигурация MarkdownLint

## Установка

```sh
npm i @alexlit/config-markdownlint -D
```

## Подключение

Создайте в корне проекта файл `.markdownlint.json`:

```json
// .markdownlint.json
{
  "extends": "@alexlit/config-markdownlint/.markdownlint.json"
}
```

Some text.

          # Indented code

More text.

```ruby
  # Fenced code
```

More text.
