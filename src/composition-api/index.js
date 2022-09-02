import { loading } from './loading';
import { storage } from './storage';
import { toast } from './toast';
const useLoading = loading;
const useLocalStorage = storage;
const useToast = toast;

export { useLoading, useLocalStorage, useToast };
