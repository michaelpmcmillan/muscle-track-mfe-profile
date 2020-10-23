# muscle-track-mfe-profile

Micro frontend to capture profile data. This is to be used with the main [container](https://github.com/michaelpmcmillan/muscle-track-mfe-container).

## Run in Development

```bash
yarn start:dev
```

## Notes

- Uses react-helmet to inject html headers, such as css cdn links. This keeps the micro-front-end self contained.
- Uses react-bootstrap and the bootstrap cdn.
- Uses formik to handle form data
- Uses yup to handle form validation
- Uses styled-components for easily packagable mfe css
- Uses axios to call micro-services

## How was this app started?

```bash
npm install --global create-single-spa
npx create-single-spa
.
single-spa root config
yarn
y (typescript)
n (beta layouts)
michaelpmcmillan
```

## See

- https://github.com/netlify/create-react-app-lambda
