import {legacy_CreateStore as createstore} from 'redux';
import { reducer } from './reducer';

export const store=createstore(reducer);