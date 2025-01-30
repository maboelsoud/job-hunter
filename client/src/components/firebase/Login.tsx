import { Paper, Stack, Text, TextInput, PasswordInput, Group, Button, Anchor, Checkbox, Divider, Container, SimpleGrid } from "@mantine/core"
import { GoogleButton } from "../icons/googleButton";
import { useForm } from '@mantine/form';
import { useToggle, upperFirst } from "@mantine/hooks";
import { showNotification } from '@mantine/notifications';
import { LinkedInButton } from "../icons/linkedInButton";

interface LoginProps {
  handleSignInWithEmail: (values: { name: string; email: string; password: string; terms: boolean }) => void,
  handleSignInWithGoogle: () => void
  handleSignInWithLinkedIn: () => void
  handleForgotPw: (email: string) => void,
}

export const Login: React.FC<LoginProps> = (
  {
    handleSignInWithEmail,
    handleSignInWithGoogle,
    handleSignInWithLinkedIn,
    handleForgotPw,
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

  const handleSubmit = async (values: any) => {
    try {
      if (isForgotPw) {
        await handleForgotPw(values.email);
        form.reset();
        showNotification({ title: 'Success', message: 'Password reset email sent', color: 'green' })
      } else {
        await handleSignInWithEmail(values);
        form.reset();
        showNotification({ title: 'Success', message: 'successfully signed in', color: 'green' })
      }
    } catch (err: any) {
      showNotification({ title: 'Error', message: err.message })
    }
  }

  return (
    <Container size="xs" my={30} pos="relative">
      <Paper radius="md" p="xl" withBorder>
        <Text size="lg" fw={500}>
          {
            isForgotPw ?
              (`Enter your email to get a reset link`)
              :
              (`Welcome to Job Hunter, ${loginType} with`)
          }
        </Text>

        {!isForgotPw && (
          <>
            <Group grow mb="md" mt="md">
              <GoogleButton onClick={handleSignInWithGoogle} radius="xl">Google</GoogleButton>
              <LinkedInButton onClick={handleSignInWithLinkedIn} radius="xl">LinkedIn</LinkedInButton>
            </Group>

            <Divider label="Or continue with email" labelPosition="center" my="lg" />
          </>
        )}

        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Stack>
            {!isForgotPw && loginType === 'register' && (
              <TextInput
                label="Name"
                placeholder="Your name"
                {...form.getInputProps('name')}
                radius="md"
              />
            )}

            <TextInput
              required
              label="Email"
              placeholder="hello@mantine.dev"
              {...form.getInputProps('email')}
              error={form.errors.email}
              radius="md"
            />

            {
              !isForgotPw &&
              (<PasswordInput
                required={!isForgotPw}
                label="Password"
                placeholder="Your password"
                {...form.getInputProps('password')}
                error={form.errors.password}
                radius="md"
              />)
            }

            {loginType === 'register' && (
              <Checkbox
                required={!isForgotPw}
                label="I accept terms and conditions"
                {...form.getInputProps('terms')}
                checked={form.values.terms}
              />
            )}
          </Stack>

          <Group justify="space-between" mt="xl">
            <SimpleGrid cols={2} spacing='10'>
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
            </SimpleGrid>
            <Button type="submit" radius="xl">
              {isForgotPw ? `Reset password` : upperFirst(loginType)}
            </Button>
          </Group>
        </form>
      </Paper>
    </Container>
  )
}