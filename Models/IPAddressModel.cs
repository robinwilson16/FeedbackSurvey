using Microsoft.EntityFrameworkCore;

namespace FeedbackSurvey.Models
{
    [Keyless]
    public class IPAddressModel
    {
        public string? IPAddress { get; set; }
    }
}
