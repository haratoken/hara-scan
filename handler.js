import { _Transactions, _DetailTransactions, _Web3Functions, _TransactionsByAddress, _VerifiedContracts } from "./src/WatcherController";

'use strict';

const _getTransactions = async (event, context, callback) => {
  await _Transactions(event, context, callback, "transaction");
};

const _getTransactionsByAddress = async (event, context, callback) => {
  await _TransactionsByAddress(event, context, callback, "transaction");
};

const _getVerifiedContracts = async (event, context, callback) => {
  await _VerifiedContracts(event, context, callback, "transaction");
};

const _getBlocks = async (event, context, callback) => {
  await _Transactions(event, context, callback, "block");
};

const _getDetailTransaction = async (event, context, callback) => {
  await _DetailTransactions(event, context, callback);
};

const _getWeb3Functions = async (event, context, callback) => {
  await _Web3Functions(event, context, callback);
}

export {
  _getTransactions,
  _getBlocks,
  _getDetailTransaction,
  _getWeb3Functions,
  _getTransactionsByAddress,
  _getVerifiedContracts
}