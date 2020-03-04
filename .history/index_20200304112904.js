require('module-alias/register');
const http = require('http'),
      BudgetManagerAPI = require('@BudgetManagerAPI'),
      BudgetManagerServer =
      http.Server(BudgetManagerAPI),
        BudgetMan