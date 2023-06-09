import { Box, Button, FormControl, Input, VStack } from "native-base";
import React from "react";
import { usePostQuery } from "../../../hooks/api";
import { useForm, Controller } from "react-hook-form";
import { TextInput } from "react-native";

const Login = () => {
  const { mutate, isLoading } = usePostQuery({
    listKeyId: "get-me",
  });

  const { register, watch, control, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    mutate({
      url: "auth-mail",
      attributes: {
        ...data,
      },
    });
  };

  console.log(watch("email"));
  return (
    <Box safeArea p="2" w="100%" maxW="300">
      <VStack space={3}>
        <FormControl>
          <FormControl.Label>Email</FormControl.Label>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
            name="email"
            rules={{ required: true }}
          />
        </FormControl>
        <FormControl>
          <FormControl.Label>Password</FormControl.Label>
          <Input type="password" size={"2xl"} />
        </FormControl>
        <Button
          size={"lg"}
          mt={5}
          onPress={handleSubmit(onSubmit)}
          isLoading={isLoading}
        >
          Sign in
        </Button>
      </VStack>
    </Box>
  );
};

export default Login;
