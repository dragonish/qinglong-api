# qinglong-api

The TypeScript type for global variable `QLAPI`.

## Installation

```shell
npm install qinglong-api -D
```

## Configuration

Add to the `tsconfig.json` file:

```json
{
  "compilerOptions": {
    "types": ["qinglong-api"]
  }
}
```

## Usage Examples

```typescript
// Get environment list
QLAPI.getEnvs({ searchValue: 'dddd' }).then((x) => {
  console.log('getEnvs', x);
});
```

## Guide

See: [Built-in API](https://qinglong.online/en/guide/user-guide/built-in-api).

## Credits

- [whyour/qinglong](https://github.com/whyour/qinglong)

## License

[MIT](./LICENSE)
