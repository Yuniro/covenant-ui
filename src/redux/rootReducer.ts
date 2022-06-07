import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
// slices
import proposalReducer from "./slices/proposal";

// ----------------------------------------------------------------------

const createNoopStorage = () => ({
  getItem(_key: string) {
    return Promise.resolve(null);
  },
  setItem(_key: string, value: any) {
    return Promise.resolve(value);
  },
  removeItem(_key: string) {
    return Promise.resolve();
  },
});

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

const rootPersistConfig = {
  key: "root",
  keyPrefix: "convenant-",
  storage,
  whitelist: [],
};

const proposalPersistConfig = {
  key: "proposal",
  keyPrefix: "convenant-",
  storage,
};

const rootReducer = combineReducers({
  proposal: persistReducer(proposalPersistConfig, proposalReducer),
});

export { rootPersistConfig, rootReducer };
