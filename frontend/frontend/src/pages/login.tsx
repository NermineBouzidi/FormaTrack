import React, { useState } from 'react';
import { 
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
  Paper,
  Divider
} from '@mui/material';
import { 
  Visibility, 
  VisibilityOff,
  Login as LoginIcon
} from '@mui/icons-material';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Login data:', formData);
    // Add your authentication logic here
  };

  return (
    <Container 
      maxWidth="xs" 
      sx={{ 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        p: 2
      }}
    >
      <Paper 
        elevation={3} 
        sx={{ 
          p: 4, 
          borderRadius: 2,
          width: 400,  // Fixed width
          height: 400, // Equal height for square shape
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <Box 
          component="form" 
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            height: '100%'
          }}
        >
          <Typography variant="h5" align="center" gutterBottom>
            Welcome
          </Typography>
          
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              variant="outlined"
              size="small"
              value={formData.email}
              onChange={handleChange}
              required
              sx={{ mb: 2 }}
            />

            <TextField
              fullWidth
              label="Password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              variant="outlined"
              size="small"
              value={formData.password}
              onChange={handleChange}
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                      size="small"
                    >
                      {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
              <Link href="#" variant="body2" sx={{ fontSize: '0.75rem' }}>
                Forgot password?
              </Link>
            </Box>
          </Box>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 'auto' }} // Pushes button to bottom
          >
            Sign In
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;