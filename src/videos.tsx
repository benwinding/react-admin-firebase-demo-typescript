// in src/videos.tsx
import * as React from "react";
// tslint:disable-next-line:no-var-requires
import {
  Datagrid,
  List,
  Show,
  Create,
  Edit,
  Filter,
  // DisabledInput,
  SimpleShowLayout,
  SimpleForm,
  TextField,
  TextInput,
  ShowButton,
  EditButton,
  DeleteButton,
  RichTextField,
  SelectInput,
  FileField,
  FileInput,
  UrlField,
  NumberField,
  BooleanInput,
  NumberInput,
  BooleanField,
  ListProps,
  ShowProps,
  CreateProps,
  EditProps
} from "react-admin";
import RichTextInput from "ra-input-rich-text";

const VideoFilter = (props: any) => {
  return (<Filter {...props}>
    <TextInput label="Search" source="title" alwaysOn />
  </Filter>);
};

export const VideoList = (props: ListProps) => (
  <List {...props} filters={<VideoFilter />}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <UrlField source="uri" />
      <TextField source="brand" />
      <TextField source="price" />
      <NumberField source="likes" />
      <ShowButton label="" />
      <EditButton label="" />
      <DeleteButton label="" />
    </Datagrid>
  </List>
);

export const VideoShow = (props: ShowProps) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="title" />
      <UrlField source="uri" />
      <TextField source="brand" />
      <TextField source="brandHandle" />
      <TextField source="price" />
      <RichTextField source="description" />
      <TextField source="tags" />
      <BooleanField source="isLiked" />
      <BooleanField source="isFollowing" />
      <BooleanField source="isSaved" />
      <NumberField source="likes" />
    </SimpleShowLayout>
  </Show>
);

export const VideoCreate = (props: CreateProps) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="uri" />
      <TextInput source="brand" />
      <TextInput source="brandHandle" />
      <TextInput source="price" />
      <RichTextInput source="description" />
      <TextInput source="tags" helperText="Comma-separated values" />
      <BooleanInput source="isLiked" />
      <BooleanInput source="isFollowing" />
      <BooleanInput source="isSaved" />
      <NumberInput source="likes" />
    </SimpleForm>
  </Create>
);

export const VideoEdit = (props: EditProps) => (
  <Edit {...props}>
    <SimpleForm>
      {/* <DisabledInput source="id" /> */}
      <TextInput source="title" />
      <TextInput source="uri" />
      <TextInput source="brand" />
      <TextInput source="brandHandle" />
      <TextInput source="price" />
      <RichTextInput source="description" />
      <TextInput source="tags" helperText="Comma-separated values" />
      <BooleanInput source="isLiked" />
      <BooleanInput source="isFollowing" />
      <BooleanInput source="isSaved" />
      <NumberInput source="likes" />
    </SimpleForm>
  </Edit>
);
