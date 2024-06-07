import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { emailService } from "../services/email-service";


export const store = configureStore({
  reducer: {
    [emailService.reducerPath]: emailService.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      emailService.middleware,
    
    ),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
