import { NextApiRequest } from "next";

export interface IStyle {
  [key: string]: string[];
}

export interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  statusImage: string;
  userPrompt: string;
}

export interface DDHeaderProps {
  ImagePath?: string;
  ImageAlt?: string;
  Label: string;
}

export interface DropDownMenueProps {
  ImagePath: string;
  ImageAlt: string;
  Label: string;
  Value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  Options: IStyle | string[];
}

export interface GenerateButtonProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  showSpinner: boolean;
}

export interface SizeSelectorProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface InputFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
}

export enum CreateImageRequestSizeEnum {
  "256x256" = "256x256",
  "512x512" = "512x512",
  "1024x1024" = "1024x1024",
}

export interface GenerateRequest extends NextApiRequest {
  body: {
    prompt: string;
    n: number;
    size: string;
  };
}

export type ResponseData = {
  url: string | undefined;
};
