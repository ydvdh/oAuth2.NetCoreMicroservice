﻿using IdentityModel;
using IdentityServer4;
using IdentityServer4.Models;
using IdentityServer4.Test;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace IdentityServer
{
    public class Config
    {
        public static IEnumerable<Client> Clients =>
            new Client[]
            {
                //new Client
                //{
                //    ClientId = "movieClient",
                //    AllowedGrantTypes = GrantTypes.ClientCredentials,
                //    ClientSecrets =
                //    {
                //        new Secret("secret".Sha256())
                //    },
                //    AllowedScopes = { "movieAPI" }
                //},
                // client properties for MVC app
                new Client
                {
                    ClientId = "spa-client",
                    ClientName = "Projects SPA",
                    AllowedGrantTypes = GrantTypes.Code,
                    RequirePkce = false, // for hybrid flow
                    AllowRememberConsent = false,
                    RedirectUris = new List<string>()
                    {
                        "http://localhost:4200/signin-callback",
                        "http://localhost:4200/assets/silent-callback.html"
                    },
                    PostLogoutRedirectUris = new List<string>()
                    {
                        "http://localhost:4200/signout-callback"
                    },
                    AllowedCorsOrigins = { "http://localhost:4200" },
                    ClientSecrets = new List<Secret>
                    {
                        new Secret("secret".Sha256())
                    },
                    AllowedScopes = new List<string>
                    {
                        IdentityServerConstants.StandardScopes.OpenId,
                        IdentityServerConstants.StandardScopes.Profile,
                        IdentityServerConstants.StandardScopes.Address,
                        IdentityServerConstants.StandardScopes.Email,
                        "movieAPI",     
                        "roles"
                    },
                    AccessTokenLifetime = 120,
                    AllowOfflineAccess = true,
                    UpdateAccessTokenClaimsOnRefresh = true
                    ///RefreshTokenExpiration = TokenExpiration.Sliding                  
                }
            };

        public static IEnumerable<ApiScope> ApiScopes =>
           new ApiScope[]
           {
               new ApiScope("movieAPI", "Movie API")
           };

        public static IEnumerable<ApiResource> ApiResources =>
          new ApiResource[]
          {
               //new ApiResource("movieAPI", "Movie API")
          };
        public static IEnumerable<IdentityResource> IdentityResources =>
          new IdentityResource[]
          {
              new IdentityResources.OpenId(),
              new IdentityResources.Profile(),
              new IdentityResources.Address(),
              new IdentityResources.Email(),
              new IdentityResource("roles","role(s)", new List<string>() { "role" })
          };

        public static List<TestUser> TestUsers =>
           new List<TestUser>
           {
               new TestUser
               {
                    SubjectId = "5BE86359-073C-434B-AD2D-A3932222DABE",
                    Username = "ydvdhkl",
                    Password = "ydvdhkl",
                    Claims = new List<Claim>
                    {
                        new Claim(JwtClaimTypes.GivenName, "yadav"),
                        new Claim(JwtClaimTypes.FamilyName, "dhkl")
                    }
               }
           };
    }
}
