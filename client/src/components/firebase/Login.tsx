import { Paper, Stack, Text, TextInput, PasswordInput, Group, Button, Anchor, Checkbox, Divider } from "@mantine/core"
import { GoogleButton } from "./googleButton";
import { useForm } from '@mantine/form';
import { useToggle, upperFirst } from "@mantine/hooks";

export const Login = (
  {
    handleSignInWithEmail,
    handleSignInWithGoogle,
    handleForgotPw,
  }: {
    handleSignInWithEmail: (arg0: any) => void,
    handleSignInWithGoogle: (arg0: any) => void
    handleForgotPw: (arg0: any) => void,
  }) => {

  const [loginType, toggleLogin] = useToggle(['login', 'register']);
  const [isForgotPw, toggleForgotPw] = useToggle([false, true]);
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      password: '',
      terms: false,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: (val) => {
        if (isForgotPw) return null;
        return val.length <= 6 ? 'Password should include at least 6 characters' : null
      },
      terms: (val) => {
        if (isForgotPw || loginType === "login") return null;
        return !val ? "please accept terms and conditions" : null;
      }
    },
  });
  return (
    <>
      <Paper radius="md" p="xl" withBorder>
        <Text size="lg" fw={500}>
          {
            isForgotPw ?
              (`Enter your email to get a reset link`)
              :
              (`Welcome to Mantine, ${loginType} with`)
          }

        </Text>

        {!isForgotPw && (
          <>
            <Group grow mb="md" mt="md">
              <GoogleButton onClick={handleSignInWithGoogle} radius="xl">Google</GoogleButton>
            </Group>

            <Divider label="Or continue with email" labelPosition="center" my="lg" />
          </>
        )}

        <form onSubmit={form.onSubmit((event) => {
          if (isForgotPw) {
            handleForgotPw(event);
          } else {
            handleSignInWithEmail(event);
          }
        })}>
          <Stack>
            {!isForgotPw && loginType === 'register' && (
              <TextInput
                label="Name"
                placeholder="Your name"
                value={form.values.name}
                onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
                radius="md"
              />
            )}

            <TextInput
              required
              label="Email"
              placeholder="hello@mantine.dev"
              value={form.values.email}
              onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
              error={form.errors.email && 'Invalid email'}
              radius="md"
            />

            {
              !isForgotPw &&
              (<PasswordInput
                required={!isForgotPw}
                label="Password"
                placeholder="Your password"
                value={form.values.password}
                onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
                error={form.errors.password && 'Password should include at least 6 characters'}
                radius="md"
              />)
            }

            {loginType === 'register' && (
              <Checkbox
                required={!isForgotPw}
                label="I accept terms and conditions"
                checked={form.values.terms}
                onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
              />
            )}
          </Stack>

          <Group justify="space-between" mt="xl">
            <Stack align="flex-start">
              {
                !isForgotPw &&
                (<Anchor component="button" type="button" c="dimmed" onClick={() => toggleLogin()} size="xs">
                  {loginType === 'register'
                    ? 'Already have an account? Login'
                    : "Don't have an account? Register"}
                </Anchor>)
              }
              <Anchor component="button" type="button" c="dimmed" onClick={() => toggleForgotPw()} size="xs">
                {isForgotPw
                  ? "<- Back to the login page"
                  : 'forgot your password?'}
              </Anchor>
            </Stack>
            <Button type="submit" radius="xl">
              {isForgotPw ? `Reset password` : upperFirst(loginType)}
            </Button>
          </Group>
        </form>
      </Paper>
    </>
  )
}