import { useState, useEffect } from "react";
import { AuthClient } from "@dfinity/auth-client";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const [authClient, setAuthClient] = useState<AuthClient | null>(null);
  const [identity, setIdentity] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate(); // Hook from react-router-dom to navigate programmatically

  useEffect(() => {
    (async () => {
      const client = await AuthClient.create();
      setAuthClient(client);

      if (await client.isAuthenticated()) {
        const id = client.getIdentity().getPrincipal().toText();
        setIdentity(id);
        setIsAuthenticated(true);
         navigate("/dashboard"); 
      }
    })();
  }, []);

  const login = async () => {
    if (!authClient) return;

    await authClient.login({
      identityProvider: "https://identity.ic0.app",
      onSuccess: async () => {
        const id = authClient.getIdentity().getPrincipal().toText();
        setIdentity(id);
        setIsAuthenticated(true);

        await registerUser(); 

        navigate("/dashboard");

      },
    });
  };

  const logout = async () => {
    if (!authClient) return;
    await authClient.logout();
    setIdentity(null);
    setIsAuthenticated(false);
    navigate("/")
  };

 
  const registerUser = async () => {
    try {
      const response = await fetch("http://localhost:4943/registerUser", {
        method: "POST",
      });
      const data = await response.json();
      console.log("User Registered:", data);
       if (data.success) {
        navigate("/dashboard"); // Redirect after successful registration
      }
    } catch (error) {
      console.error("Registration Error:", error);
    }
  };

  return { login, logout, identity, isAuthenticated };
};
