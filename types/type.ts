import AUTH_TEXT from '../constant/authText';

export interface LinkType {
  id: number;
  createdAt?: string;
  created_at?: string;
  imageSource?: string;
  image_source?: string;
  title: string;
  description: string;
  url: string;
}

export interface CategoryType {
  created_at?: string;
  favorite?: boolean;
  id: number;
  link: {
    count: number;
  };
  name: string;
  user_id?: number;
}

export interface DefaultCategoryType {
  id: number;
  name: string;
  link: {
    count: number;
  };
}

export interface SelectCategoryType {
  id: number;
  name: string;
}

export interface ModalActionType {
  isView?: boolean;
  action: string;
  subTitle?: string;
  url?: string;
}

export type UserInputType = AUTH_TEXT.TYPE_EMAIL | AUTH_TEXT.TYPE_PASSWORD | AUTH_TEXT.PASSWORD_CONFIRM;

export type UserInputs = {
  [key in UserInputType]: string;
};

export type userInfoType = {
  email: string;
  password: string;
};
