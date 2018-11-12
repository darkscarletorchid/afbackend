namespace Materialise.AF.Web.Services
{
    public interface ITokenService
    {
        string GenerateToken(string userName);
    }
}
