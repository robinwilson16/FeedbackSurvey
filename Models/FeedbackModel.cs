using FluentValidation;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace FeedbackSurvey.Models
{
    public class FeedbackModel
    {
        [Key]
        public int FeedbackID { get; set; }
        public DateTime? FeedbackDate { get; set; }

        [DisplayName("How would you rate your overall experience of the enrolment process")]
        public FeedbackRating Rating { get; set; }
        
        [StringLength(39, ErrorMessage = "IP addresses are limited to 39 characters")]
        public string? IPAddress { get; set; }
    }

    public enum FeedbackRating
    {
        [Display(Name = "Very Poor")]
        VeryPoor = 1,
        Poor = 2,
        Average = 3,
        Good = 4,
        Excellent = 5
    }

    public class FeedbackValidator : AbstractValidator<FeedbackModel>
    {
        public FeedbackValidator()
        {
            RuleFor(m => m.FeedbackDate)
                .NotNull()
                .WithMessage("Please provide the date of the feedback");
            RuleFor(m => m.Rating)
                .NotNull()
                .WithMessage("Please provide the feedback rating");
            RuleFor(x => x.Rating).IsInEnum().WithMessage("Please provide a valid rating between 1 (very poor) and 5 (excellent)");
        }
    }
}
