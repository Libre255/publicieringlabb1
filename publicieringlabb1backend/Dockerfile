FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /backendfiles
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["publicieringlabb1backend.csproj", "."]
RUN dotnet restore "publicieringlabb1backend.csproj"
COPY . .

FROM build AS publish 
RUN dotnet publish "publicieringlabb1backend.csproj" -c Release -o /backendfiles/publish

FROM base AS final
COPY --from=publish /backendfiles/publish .
ENTRYPOINT ["dotnet", "publicieringlabb1backend.dll"]