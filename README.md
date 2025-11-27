# Automated UI Test – Earn Page (Cypress)

This repository contains an automated test for the earn page in the Kiln widget

The goal is to validate:
- The value displayed after clicking on MAX is always a multiple of 32 ETH
- The displayed value is indeed the maximum possible compared to the current available balance
(i.e., the largest multiple of 32 that does not exceed the balance)

## Requirements
- Node.js
- npm

## Install dependencies
```bash
npm install
```

## How to run the test suite
```bash
npm run test
```

