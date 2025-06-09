"use client";

import { useState } from 'react';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { Progress } from '@/components/ui/progress';

const ReviewModal = ({ totalReviews, averageRating }: { totalReviews: number, averageRating: number }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 5;
  
  // Sample review data
  const allReviews = [
    { id: 1, rating: 5, name: 'John D.', date: '2 days ago', comment: 'This is the best deal I\'ve found for Office. Installed perfectly and works great!', verified: true },
    { id: 2, rating: 4, name: 'Sarah M.', date: '1 week ago', comment: 'Great product at an amazing price. Had a small issue but customer support was helpful.', verified: true },
    { id: 3, rating: 5, name: 'Michael T.', date: '2 weeks ago', comment: 'Exactly as described. Activation was smooth and the software works perfectly.', verified: true },
    { id: 4, rating: 3, name: 'Emily R.', date: '3 weeks ago', comment: 'Good deal but the download took longer than expected.', verified: false },
    { id: 5, rating: 5, name: 'David K.', date: '1 month ago', comment: 'Fantastic value for money. Would definitely recommend to others.', verified: true },
    { id: 6, rating: 4, name: 'Lisa P.', date: '1 month ago', comment: 'Works well, no complaints. Much better than paying for a subscription.', verified: true },
    { id: 7, rating: 2, name: 'Robert J.', date: '2 months ago', comment: 'Had compatibility issues with my older Mac.', verified: true },
    { id: 8, rating: 5, name: 'Jennifer L.', date: '2 months ago', comment: 'Perfect! Saved me hundreds compared to buying directly from Microsoft.', verified: true },
  ];

  // Calculate rating distribution
  const ratingDistribution = [0, 0, 0, 0, 0];
  allReviews.forEach(review => {
    ratingDistribution[5 - review.rating]++;
  });

  // Get current reviews for pagination
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = allReviews.slice(indexOfFirstReview, indexOfLastReview);
  const totalPages = Math.ceil(allReviews.length / reviewsPerPage);

  // Render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }
    
    return stars;
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="text-primary p-0 h-auto">
          See all {totalReviews} reviews
        </Button>
      </DialogTrigger>
      
      <DialogContent className="w-[80vw] max-w-[1200px] max-h-[90vh] h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Customer Reviews</DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Rating Overview */}
          <div className="space-y-6">
            {/* Overall Rating */}
            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Overall Rating</h3>
              <div className="flex items-center gap-4">
                <div className="text-5xl font-bold">{averageRating.toFixed(1)}</div>
                <div>
                  <div className="flex mb-1">
                    {renderStars(averageRating)}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Based on {totalReviews} reviews
                  </div>
                </div>
              </div>
            </div>
            
            {/* Rating Distribution */}
            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Rating Distribution</h3>
              <div className="space-y-3">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <div key={rating} className="flex items-center gap-3">
                    <div className="w-10 text-sm">{rating} star</div>
                    <Progress 
                      value={(ratingDistribution[5 - rating] / allReviews.length) * 100} 
                      className="h-2.5 flex-1"
                    />
                    <div className="w-10 text-sm text-right text-muted-foreground">
                      {ratingDistribution[5 - rating]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Column - Reviews List */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Customer Reviews</h3>
            
            {/* Reviews List */}
            <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2">
              {currentReviews.map((review) => (
                <div key={review.id} className="pb-4 border-b">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex">
                      {renderStars(review.rating)}
                    </div>
                    <span className="font-medium">{review.name}</span>
                    {review.verified && (
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">
                        Verified Purchase
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{review.date}</p>
                  <p className="mb-2">{review.comment}</p>
                </div>
              ))}
            </div>
            
            {/* Pagination */}
            <Pagination className="mt-6">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage > 1) setCurrentPage(currentPage - 1);
                    }}
                    className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                  />
                </PaginationItem>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentPage(page);
                      }}
                      isActive={page === currentPage}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                
                <PaginationItem>
                  <PaginationNext 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                    }}
                    className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ReviewModal;